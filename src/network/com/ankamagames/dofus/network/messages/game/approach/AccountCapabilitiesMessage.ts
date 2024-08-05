import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";
import { BooleanByteWrapper } from "./../../../../../jerakine/network/utils/BooleanByteWrapper";

export class AccountCapabilitiesMessage extends NetworkMessage
{

	public static readonly protocolId: number = 8908;

	public accountId: number = 0;
	public tutorialAvailable: boolean = false;
	public status: number;
	public canCreateNewCharacter: boolean = false;

    public constructor()
    {
        super();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AccountCapabilitiesMessage(input);
    }

    public deserializeByteBoxes(input: ICustomDataInput)
    {
        let _box0: number = input.readByte();
        this.tutorialAvailable = BooleanByteWrapper.getFlag(_box0,0);
        this.canCreateNewCharacter = BooleanByteWrapper.getFlag(_box0,1);
    }

    private deserializeAs_AccountCapabilitiesMessage(input: ICustomDataInput)
    {
        this.deserializeByteBoxes(input);
        this._accountIdFunc(input);
        this._statusFunc(input);
    }

    private _accountIdFunc(input: ICustomDataInput)
    {
        this.accountId = input.readInt();
        if(this.accountId < 0)
        {
            throw new Error("Forbidden value (" + this.accountId + ") on element of AccountCapabilitiesMessage.accountId.");
        }
    }

    private _statusFunc(input: ICustomDataInput)
    {
        this.status = input.readByte();
    }

}