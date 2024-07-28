import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";
import { BooleanByteWrapper } from "./../../../../../jerakine/network/utils/BooleanByteWrapper";

export class ServerSettingsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 154;

	public lang: string = "";
	public community: number = 0;
	public gameType: number;
	public isMonoAccount: boolean = false;
	public arenaLeaveBanTime: number = 0;
	public itemMaxLevel: number = 0;
	public hasFreeAutopilot: boolean = false;

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
        this.deserializeAs_ServerSettingsMessage(input);
    }

    public deserializeByteBoxes(input: ICustomDataInput)
    {
        let _box0: number = input.readByte();
        this.isMonoAccount = BooleanByteWrapper.getFlag(_box0,0);
        this.hasFreeAutopilot = BooleanByteWrapper.getFlag(_box0,1);
    }

    private deserializeAs_ServerSettingsMessage(input: ICustomDataInput)
    {
        this.deserializeByteBoxes(input);
        this._langFunc(input);
        this._communityFunc(input);
        this._gameTypeFunc(input);
        this._arenaLeaveBanTimeFunc(input);
        this._itemMaxLevelFunc(input);
    }

    private _langFunc(input: ICustomDataInput)
    {
        this.lang = input.readUTF();
    }

    private _communityFunc(input: ICustomDataInput)
    {
        this.community = input.readByte();
        if(this.community < 0)
        {
            throw new Error("Forbidden value (" + this.community + ") on element of ServerSettingsMessage.community.");
        }
    }

    private _gameTypeFunc(input: ICustomDataInput)
    {
        this.gameType = input.readByte();
    }

    private _arenaLeaveBanTimeFunc(input: ICustomDataInput)
    {
        this.arenaLeaveBanTime = input.readVarUhShort();
        if(this.arenaLeaveBanTime < 0)
        {
            throw new Error("Forbidden value (" + this.arenaLeaveBanTime + ") on element of ServerSettingsMessage.arenaLeaveBanTime.");
        }
    }

    private _itemMaxLevelFunc(input: ICustomDataInput)
    {
        this.itemMaxLevel = input.readInt();
        if(this.itemMaxLevel < 0)
        {
            throw new Error("Forbidden value (" + this.itemMaxLevel + ") on element of ServerSettingsMessage.itemMaxLevel.");
        }
    }

}