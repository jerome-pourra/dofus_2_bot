import { AccountTagInformation } from "./../../types/common/AccountTagInformation";
import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";
import { BooleanByteWrapper } from "./../../../../jerakine/network/utils/BooleanByteWrapper";

export class IdentificationSuccessMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6104;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public login: string = "";
	public accountTag: AccountTagInformation;
	public accountId: number = 0;
	public communityId: number = 0;
	public hasRights: boolean = false;
	public hasReportRight: boolean = false;
	public hasForceRight: boolean = false;
	public accountCreation: number = 0;
	public subscriptionEndDate: number = 0;
	public wasAlreadyConnected: boolean = false;
	public havenbagAvailableRoom: number = 0;

    public constructor()
    {
        super();
        this.accountTag = new AccountTagInformation();
    }

    public getMessageId()
    {
        return IdentificationSuccessMessage.protocolId;
    }

    public isEndpointClient()
    {
        return IdentificationSuccessMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return IdentificationSuccessMessage.endpointServer;
    }

    public initIdentificationSuccessMessage(login: string = "", accountTag: AccountTagInformation = null, accountId: number = 0, communityId: number = 0, hasRights: boolean = false, hasReportRight: boolean = false, hasForceRight: boolean = false, accountCreation: number = 0, subscriptionEndDate: number = 0, wasAlreadyConnected: boolean = false, havenbagAvailableRoom: number = 0): IdentificationSuccessMessage
    {
        this.login = login;
        this.accountTag = accountTag;
        this.accountId = accountId;
        this.communityId = communityId;
        this.hasRights = hasRights;
        this.hasReportRight = hasReportRight;
        this.hasForceRight = hasForceRight;
        this.accountCreation = accountCreation;
        this.subscriptionEndDate = subscriptionEndDate;
        this.wasAlreadyConnected = wasAlreadyConnected;
        this.havenbagAvailableRoom = havenbagAvailableRoom;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_IdentificationSuccessMessage(output);
    }

    public serializeAs_IdentificationSuccessMessage(output: ICustomDataOutput)
    {
        var _box0: number = 0;
        _box0 = BooleanByteWrapper.setFlag(_box0,0,this.hasRights);
        _box0 = BooleanByteWrapper.setFlag(_box0,1,this.hasReportRight);
        _box0 = BooleanByteWrapper.setFlag(_box0,2,this.hasForceRight);
        _box0 = BooleanByteWrapper.setFlag(_box0,3,this.wasAlreadyConnected);
        output.writeByte(_box0);
        output.writeUTF(this.login);
        this.accountTag.serializeAs_AccountTagInformation(output);
        if(this.accountId < 0)
        {
            throw new Error("Forbidden value (" + this.accountId + ") on element accountId.");
        }
        output.writeInt(this.accountId);
        if(this.communityId < 0)
        {
            throw new Error("Forbidden value (" + this.communityId + ") on element communityId.");
        }
        output.writeByte(this.communityId);
        if(this.accountCreation < 0 || this.accountCreation > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.accountCreation + ") on element accountCreation.");
        }
        output.writeDouble(this.accountCreation);
        if(this.subscriptionEndDate < 0 || this.subscriptionEndDate > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.subscriptionEndDate + ") on element subscriptionEndDate.");
        }
        output.writeDouble(this.subscriptionEndDate);
        if(this.havenbagAvailableRoom < 0 || this.havenbagAvailableRoom > 255)
        {
            throw new Error("Forbidden value (" + this.havenbagAvailableRoom + ") on element havenbagAvailableRoom.");
        }
        output.writeByte(this.havenbagAvailableRoom);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_IdentificationSuccessMessage(input);
    }

    public deserializeByteBoxes(input: ICustomDataInput)
    {
        let _box0: number = input.readByte();
        this.hasRights = BooleanByteWrapper.getFlag(_box0,0);
        this.hasReportRight = BooleanByteWrapper.getFlag(_box0,1);
        this.hasForceRight = BooleanByteWrapper.getFlag(_box0,2);
        this.wasAlreadyConnected = BooleanByteWrapper.getFlag(_box0,3);
    }

    private deserializeAs_IdentificationSuccessMessage(input: ICustomDataInput)
    {
        this.deserializeByteBoxes(input);
        this._loginFunc(input);
        this.accountTag = new AccountTagInformation();
        this.accountTag.deserialize(input);
        this._accountIdFunc(input);
        this._communityIdFunc(input);
        this._accountCreationFunc(input);
        this._subscriptionEndDateFunc(input);
        this._havenbagAvailableRoomFunc(input);
    }

    private _loginFunc(input: ICustomDataInput)
    {
        this.login = input.readUTF();
    }

    private _accountIdFunc(input: ICustomDataInput)
    {
        this.accountId = input.readInt();
        if(this.accountId < 0)
        {
            throw new Error("Forbidden value (" + this.accountId + ") on element of IdentificationSuccessMessage.accountId.");
        }
    }

    private _communityIdFunc(input: ICustomDataInput)
    {
        this.communityId = input.readByte();
        if(this.communityId < 0)
        {
            throw new Error("Forbidden value (" + this.communityId + ") on element of IdentificationSuccessMessage.communityId.");
        }
    }

    private _accountCreationFunc(input: ICustomDataInput)
    {
        this.accountCreation = input.readDouble();
        if(this.accountCreation < 0 || this.accountCreation > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.accountCreation + ") on element of IdentificationSuccessMessage.accountCreation.");
        }
    }

    private _subscriptionEndDateFunc(input: ICustomDataInput)
    {
        this.subscriptionEndDate = input.readDouble();
        if(this.subscriptionEndDate < 0 || this.subscriptionEndDate > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.subscriptionEndDate + ") on element of IdentificationSuccessMessage.subscriptionEndDate.");
        }
    }

    private _havenbagAvailableRoomFunc(input: ICustomDataInput)
    {
        this.havenbagAvailableRoom = input.readUnsignedByte();
        if(this.havenbagAvailableRoom < 0 || this.havenbagAvailableRoom > 255)
        {
            throw new Error("Forbidden value (" + this.havenbagAvailableRoom + ") on element of IdentificationSuccessMessage.havenbagAvailableRoom.");
        }
    }

}